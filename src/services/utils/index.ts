import { createStandaloneToast } from "@chakra-ui/react";
// chakra theme
import { theme } from "App/theme";

export const sleep = (t: number = 300) => new Promise(resolve => setTimeout(resolve, t));

/**
 * Get nfts total attention and reward
 * @param {Array} nfts nfts array
 * @returns {Array} [totalAttention, totalReward]
 */
export const getNftsStats = (nfts: any) =>
  nfts.reduce(
    (acc: any, current: any) => {
      acc[0] += current.attention;
      acc[1] += current.reward;

      return acc;
    },
    [0, 0]
  );

export const formatDigitNumber = (val: any) => {
  if (typeof val !== "number") return 0;
  if (val) return val.toLocaleString("en-US", { maximumFractionDigits: 2 });
  else return 0;
};

/**
 * Get file's media type
 * @param {string} fileType html5 file type
 * @returns {string} file type
 */
export const getMediaType = (fileType: any) => {
  let mediaType = fileType;
  if (fileType) {
    if (fileType.includes("image/")) {
      mediaType = "image";
    } else if (fileType.includes("video/")) {
      mediaType = "video";
    }
  }
  return mediaType;
};

/**
 * Get file blob and data buffer
 * @param {string} url File url
 * @returns {Array} [dataBuffer, blob]
 */
export const getFileData = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const dataBuffer = await blob.arrayBuffer();

  return [dataBuffer, blob];
};

// Toast
const toastId = "koi-toast";
const headlessToast = createStandaloneToast({
  defaultOptions: {
    title: "Loading...",
    isClosable: true,
    duration: 2000,
    status: "info",
    position: "top-right",
    description: null,
    id: toastId
  },
  theme: theme
});

interface ToastProps {
  title?: string;
  isClosable?: boolean;
  duration?: number;
  status?: any;
  variant?: string;
  position?: any;
  description?: any;
  closeAll?: () => void;
}

export const toast = ({ title = "Loading...", isClosable = true, duration = 3000, status = "info", variant = "left-accent", position = "top-right", description = null }: ToastProps) => {
  let newToast: any;
  if (!headlessToast.isActive(toastId)) {
    newToast = headlessToast({
      title,
      description,
      status,
      duration,
      isClosable,
      position,
      variant,
      id: toastId
    });
  } else {
    newToast = headlessToast.update(toastId, { title, description, status, duration, isClosable, position, variant });
  }

  return newToast;
};

export const convertToAr = (balance: any) => {
  if (!balance) return "...";
  let value = Number(balance);
  return (value / 1000000000000)?.toFixed?.(8);
};

/**
 *
 * @param {Function} fn Function to poll for result
 * @param {Number} timeout How long to poll for
 * @param {Number} interval Polling interval
 * @returns {Promise}
 */
export const poll = (fn: any, timeout: any, interval: any) => {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  var checkCondition = function (resolve: any, reject: any) {
    // If the condition is met, we're done!
    var result = fn();
    if (result) {
      resolve(result);
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject);
    }
    // Didn't match and too much time, reject!
    else {
      reject(new Error("timed out for " + fn + ": " + arguments));
    }
  };

  return new Promise(checkCondition);
};
