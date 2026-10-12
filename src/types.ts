export type Status = "aktif" | "cuti" | "lulus";

export interface Mahasiswa {
  nim: string;
  nama: string;
  prodi: string;
  status: Status;
}

export const dataMahasiswa: Mahasiswa[] = [
  { nim: "1247050001", nama: "Ani", prodi: "Teknik Informatika", status: "aktif" },
  { nim: "1247050002", nama: "Budi", prodi: "Teknik Informatika", status: "cuti" },
];