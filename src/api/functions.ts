import axios from 'axios';

//-----------------------------------------------------------------------------
export type ObjFile = {
  id: string;
  name: string;
  creation_date: Date;
  size: number;
};

//-----------------------------------------------------------------------------
type Vector3 = {
  x: number;
  y: number;
  z: number;
};

const apiClient = axios.create({ baseURL: 'http://localhost:3333' });

//-----------------------------------------------------------------------------
export async function listFiles(): Promise<ObjFile[]> {
  const res = await apiClient.request<ObjFile[]>({
    method: 'GET',
    url: '/listFiles',
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function getFile(fileId: string): Promise<ObjFile> {
  // TODO: Replace theses arguments with the correct ones
  const res = await apiClient.request<ObjFile>({
    method: '<replace-me>',
    url: '<replace-me>',
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function renameFile(fileId: string, newName: string): Promise<ObjFile> {
  const res = await apiClient.request<ObjFile>({
    method: 'PUT',
    url: '/renameFile',
    data: { fileId, newName },
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function deleteFile(fileId: string): Promise<void> {
  await apiClient.request<ObjFile>({
    method: 'DELETE',
    url: '/deleteFile',
    data: { fileId },
  });
}

//-----------------------------------------------------------------------------
export function downloadFile(fileId: string): void {
  // TODO: Replace this value with the correct one
  const downloadUrl = '<replace-me>';
  window.open(downloadUrl, '_blank');
}

//-----------------------------------------------------------------------------
export async function uploadFile(data: FormData): Promise<ObjFile> {
  const res = await apiClient.request<ObjFile>({
    method: 'POST',
    url: '/uploadFile',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export function transformFile(fileId: string, scale: Vector3, offset: Vector3): void {
  // TODO: Replace this value with the correct one
  const transformUrl = '<replace-me>';
  window.open(transformUrl, '_blank');
}
