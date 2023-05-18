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
    url: '/files',
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function getFile(fileId: string): Promise<ObjFile> {
  const res = await apiClient.request<ObjFile>({
    method: 'GET',
    url: `/files/{${fileId}`,
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function renameFile(fileId: string, newName: string): Promise<ObjFile> {
  const res = await apiClient.request<ObjFile>({
    method: 'PUT',
    url: '/files/',
    data: { fileId, newName },
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export async function deleteFile(fileId: string): Promise<void> {
  await apiClient.request<ObjFile>({
    method: 'DELETE',
    url: '/files/',
    data: { fileId },
  });
}

//-----------------------------------------------------------------------------
export function downloadFile(fileId: string): void {
  const downloadUrl = `${apiClient.defaults.baseURL}/files/${fileId}`;
  window.open(downloadUrl, '_blank');
}

//-----------------------------------------------------------------------------
export async function uploadFile(data: FormData): Promise<ObjFile> {
  const res = await apiClient.request<ObjFile>({
    method: 'POST',
    url: '/files',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
  });
  return res.data;
}

//-----------------------------------------------------------------------------
export function transformFile(fileId: string, scale: Vector3, offset: Vector3): void {
  const transformUrl = `${apiClient.defaults.baseURL}/files/transform/${fileId}/${scale.x}/${scale.y}/${scale.z}/${offset.x}/${offset.y}/${offset.z}`;
  window.open(transformUrl, '_blank');
}
