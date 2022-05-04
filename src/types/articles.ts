interface article {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: string;
  tags: string;
  update_time: string;
  brief: string;
  have_like: number;
  imgUrl: string | undefined;
}

interface titlesMap {
  [key: string]: string;
}
