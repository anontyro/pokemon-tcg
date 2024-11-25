// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  addUser: (
    userName: string,
    firstName: string,
    lastName: string,
    email: string
  ) => ipcRenderer.invoke("add-user", { userName, firstName, lastName, email }),
  getUsers: () => ipcRenderer.invoke("get-users"),
});
