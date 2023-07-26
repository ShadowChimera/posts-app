export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface CommentData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
