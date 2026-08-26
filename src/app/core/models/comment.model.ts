export interface Comment {
  id: string;
  apartmentId: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
  parentId: string | null;
}
