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

interface BoostPostSchemaInterface {
  developer: ObjectId;
  post: ObjectId;
}

interface FlagPostSchemaInterface {
  developer: ObjectId;
  post: ObjectId;
}

interface BoostCommentSchemaInterface {
  developer: ObjectId;
  comment: ObjectId;
}

interface FlagCommentSchemaInterface {
  developer: ObjectId;
  comment: ObjectId;
}

interface BoostReplySchemaInterface {
  developer: ObjectId;
  reply: ObjectId;
}

interface FlagReplySchemaInterface {
  developer: ObjectId;
  reply: ObjectId;
}

interface RepostPostSchemaInterface {
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
