export interface PostSchemaInterface {
  developer: ObjectId;
  title: string;
  description: string;
  attachments?: {
    url: string;
    id: string;
  }[];
  snippets?: string[];
  tags?: string[];
  mentions?: ObjectId[];
  hidden: boolean;
  pinned: boolean;
  commentsEnabled: boolean;
  repostEnabled: boolean;
  private: boolean;
  isEdited: boolean;
  slug?: string;
  referenceLinks?: {
    title: string;
    url: string;
  }[];
}

export interface CommentSchemaInterface {
  developer: ObjectId;
  post: ObjectId;
  content: string;
  attachments?: {
    url: string;
    id: string;
  }[];
  snippets?: string[];
  mentions?: ObjectId[];
  pinned: boolean;
  repliesEnabled: boolean;
  hidden: boolean;
  isEdited: boolean;
}

export interface ReplySchemaInterface {
  developer: ObjectId;
  comment: ObjectId;
  content: string;
  snippets?: string[];
  mentions?: ObjectId[];
  attachments?: {
    url: string;
    id: string;
  }[];
  hidden: boolean;
  isEdited: boolean;
  pinned: boolean;
}

export interface ReactionSchemaInterface {
  developer: ObjectId;
  reactionType: ObjectId;
  targetModel: "Post" | "Comment" | "Reply";
  targetId: ObjectId;
}

export interface RepostSchemaInterface {
  developer: ObjectId;
  post: ObjectId;
}
