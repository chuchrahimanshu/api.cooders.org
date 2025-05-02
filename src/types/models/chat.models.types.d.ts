export interface IndividualChatSchemaInterface {
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

export interface CommunityChatSchemaInterface {
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
