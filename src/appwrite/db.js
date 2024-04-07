import env from "../envConfig";
import { Client, ID, Databases, Query } from "appwrite";

export class DbService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  // Board API methods
  async createBoard({ board_name, color, user_id }) {
    try {
      return await this.databases.createDocument(
        env.appwriteDbId,
        env.appwriteBoardsColId,
        ID.unique(),
        {
          board_name,
          color,
          user_id,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createBoard :: error", error);
    }
  }

  async updateBoard(id, { board_name, color }) {
    try {
      return await this.databases.updateDocument(
        env.appwriteDbId,
        env.appwriteBoardsColId,
        id,
        {
          board_name,
          color,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updateBoard :: error", error);
    }
  }

  async deleteBoard(id) {
    try {
      await this.databases.deleteDocument(
        env.appwriteDbId,
        env.appwriteBoardsColId,
        id
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteBoard :: error", error);
      return false;
    }
  }

  async getBoard(id) {
    try {
      return await this.databases.getDocument(
        env.appwriteDbId,
        env.appwriteBoardsColId,
        id
      );
    } catch (error) {
      console.log("Appwrite serive :: getBoard :: error", error);
      return false;
    }
  }

  async getAllBoards(userId) {
    try {
      return await this.databases.listDocuments(
        env.appwriteDbId,
        env.appwriteBoardsColId,
        [Query.equal("user_id", userId)]
      );
    } catch (error) {
      console.log("Appwrite serive :: getAllBoards :: error", error);
      return false;
    }
  }

  // Task API methods
  async createTask() {}

  async updateTask() {}

  async deleteTask() {}

  async getTask() {}

  async getAllTasks() {}
}

const dbService = new DbService();
export default dbService;
