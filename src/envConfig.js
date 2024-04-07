const envConfig = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteBoardsColId: String(
    import.meta.env.VITE_APPWRITE_BOARDS_COLLECTION_ID
  ),
  appwriteTasksColId: String(import.meta.env.VITE_APPWRITE_TASKS_COLLECTION_ID),
};

export default envConfig;
