
import { supabase } from "./supabaseClient";

// GET: Fetch all projects
export const getProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data;
};

// GET: Fetch a single project
export const getProjectById = async (id) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

// POST: Add a new project
export const addProject = async (project) => {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select()
    .single();

  if (error) throw error;

  return data;
};

// PUT: Replace an existing project
export const replaceProject = async (id, project) => {
  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

// PATCH: Update selected project fields
export const updateProject = async (id, fields) => {
  const { data, error } = await supabase
    .from("projects")
    .update(fields)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

// DELETE: Delete a project
export const deleteProject = async (id) => {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
};
