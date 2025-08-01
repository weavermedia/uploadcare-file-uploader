// @ts-check

import { ALL_TABS } from '../CloudImageEditor/src/toolbar-constants.js';
import { serializeCsv } from '../utils/comma-separated.js';

export const DEFAULT_CDN_CNAME = 'https://ucarecdn.com';
export const DEFAULT_BASE_URL = 'https://upload.uploadcare.com';
export const DEFAULT_SOCIAL_BASE_URL = 'https://social.uploadcare.com';
export const DEFAULT_PREFIXED_CDN_BASE_DOMAIN = 'https://ucarecd.net';

/** @type {import('../../types/exported').ConfigType} */
export const initialConfig = {
  pubkey: '',
  multiple: true,
  multipleMin: 0,
  multipleMax: Number.MAX_SAFE_INTEGER,

  confirmUpload: false,
  imgOnly: false,
  accept: '',
  externalSourcesPreferredTypes: '',
  externalSourcesEmbedCss: '',
  store: 'auto',
  cameraMirror: false,
  cameraCapture: '',
  sourceList: 'local, url, camera, dropbox, gdrive',
  topLevelOrigin: '',
  cloudImageEditorTabs: serializeCsv(ALL_TABS),
  maxLocalFileSizeBytes: 0,
  thumbSize: 76,
  showEmptyList: false,
  useLocalImageEditor: false,
  useCloudImageEditor: true,
  removeCopyright: false,
  cropPreset: '',
  imageShrink: '',

  modalScrollLock: true,
  modalBackdropStrokes: false,

  sourceListWrap: true,

  remoteTabSessionKey: '',
  cdnCname: DEFAULT_CDN_CNAME,
  cdnCnamePrefixed: DEFAULT_PREFIXED_CDN_BASE_DOMAIN,
  baseUrl: DEFAULT_BASE_URL,
  socialBaseUrl: DEFAULT_SOCIAL_BASE_URL,
  secureSignature: '',
  secureExpire: '',
  secureDeliveryProxy: '',
  retryThrottledRequestMaxTimes: 10,
  retryNetworkErrorMaxTimes: 3,
  multipartMinFileSize: 26214400,
  multipartChunkSize: 5242880,
  maxConcurrentRequests: 10,
  multipartMaxConcurrentRequests: 4,
  multipartMaxAttempts: 3,
  checkForUrlDuplicates: false,
  saveUrlForRecurrentUploads: false,

  groupOutput: false,
  userAgentIntegration: '',
  debug: false,

  metadata: null,
  localeName: 'en',
  localeDefinitionOverride: null,
  secureUploadsExpireThreshold: 10 * 60 * 1000,
  secureUploadsSignatureResolver: null,
  secureDeliveryProxyUrlResolver: null,
  iconHrefResolver: null,
  fileValidators: [],
  collectionValidators: [],

  cameraModes: 'photo, video',
  defaultCameraMode: null,
  enableAudioRecording: true,
  enableVideoRecording: null,
  maxVideoRecordingDuration: null,
  mediaRecorderOptions: null,

  filesViewMode: 'list',
  gridShowFileNames: false,
  cloudImageEditorAutoOpen: false,

  cloudImageEditorMaskHref: null,

  testMode: false,
};
