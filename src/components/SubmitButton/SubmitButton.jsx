import { useLayoutEffect, useRef, useState } from "react";
import "./SubmitButton.scss";

export default function SubmitButton({
  status = "idle",
  label = "Send message",
  loadingLabel = "Sending message",
  successLabel = "Message sent",
  errorLabel = "Message failed, try again",
  fullWidth = false,
  ...props
}) {
  const sizerRef = useRef(null);
  const [idleWidth, setIdleWidth] = useState(null);
  const isIdle = status === "idle";

  // Measure the hidden sizer (always full size), not the button itself
  useLayoutEffect(() => {
    const measure = () => {
      if (sizerRef.current) setIdleWidth(sizerRef.current.offsetWidth);
    };
    measure();
    // Re-measure once custom fonts have loaded, since they change text width
    document.fonts?.ready.then(measure);
  }, [label]);

  const style = {};
  if (isIdle) {
    if (fullWidth) style.width = "100%";
    else if (idleWidth) style.width = `${idleWidth}px`;
  } else {
    style.width = "var(--sb-height)";
  }

  const announce = {
    idle: "",
    loading: loadingLabel,
    success: successLabel,
    error: errorLabel,
  }[status];

  return (
    <>
      <button
        type="submit"
        className={`sb sb--${status}`}
        style={style}
        disabled={status === "loading" || status === "success"}
        aria-busy={status === "loading"}
        {...props}
      >
        <span className="sb__label">{label}</span>
        <span className="sb__sizer" ref={sizerRef} aria-hidden="true">
          {label}
        </span>

        <svg className="sb__icon sb__spinner" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>

        <svg className="sb__icon sb__check" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 12.5l4 4 8-9" />
        </svg>

        <svg className="sb__icon sb__cross" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7l10 10M17 7L7 17" />
        </svg>
      </button>

      <span className="sb__sr" role="status" aria-live="polite">
        {announce}
      </span>
    </>
  );
}