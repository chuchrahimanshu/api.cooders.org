interface PostSchemaInterface {
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

interface CommentSchemaInterface {
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

interface ReplySchemaInterface {
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

interface ReactionSchemaInterface {
  developer: ObjectId;
  reactionType: ObjectId;
  targetModel: "Post" | "Comment" | "Reply";
  targetId: ObjectId;
}

interface RepostSchemaInterface {
  developer: ObjectId;
  post: ObjectId;
}

interface PersonalChatSchemaInterface {
  sender: ObjectId;
  receiver: ObjectId;
  content: string;
  attachments?: {
    url: string;
    id: string;
  }[];
  snippets?: string[];
  isEdited: boolean;
  referenceLinks?: {
    title: string;
    url: string;
  }[];
  status: "SENT" | "DELIVERED" | "READ";
}

interface CommunityChatSchemaInterface {
  developer: ObjectId;
  content: string;
  attachments?: {
    url: string;
    id: string;
  }[];
  snippets?: string[];
  isEdited: boolean;
  referenceLinks?: {
    title: string;
    url: string;
  }[];
  mentions?: ObjectId[];
}
