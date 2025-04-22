// Import Section - HEALTH
import { healthCheck } from "./health/health.controllers";

// Import Section - ACCOUNTS
import {
  signup,
  signin,
  signout,
  forgetPassword,
  emailVerification,
  tfa,
} from "./account/local.account.controllers";
import {
  google,
  googleCallback,
  github,
  githubCallback,
} from "./account/social.account.controllers";

// Import Section - COMMUNITY
import {
  createPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
} from "./community/post.community.controllers";
import {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} from "./community/comment.community.controllers";
import {
  createReply,
  getReplies,
  updateReply,
  deleteReply,
} from "./community/reply.community.controllers";
import {
  reactionOnPost,
  reactionOnComment,
  reactionOnReply,
} from "./community/reaction.community.controllers";

// Export Section
export {
  healthCheck,
  signup,
  signin,
  signout,
  forgetPassword,
  emailVerification,
  tfa,
  google,
  googleCallback,
  github,
  githubCallback,
  createPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
  createComment,
  getComments,
  updateComment,
  deleteComment,
  createReply,
  getReplies,
  updateReply,
  deleteReply,
  reactionOnPost,
  reactionOnComment,
  reactionOnReply,
};
