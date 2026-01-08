// 배너 상태
export const BANNER_STATUS_OPTIONS = [
  { label: '활성', value: 'active' },
  { label: '비활성', value: 'inactive' },
]

export type BannerStatus = (typeof BANNER_STATUS_OPTIONS)[number]['value']

// 배너 포지션
export const BANNER_POSITION_OPTIONS = [{ label: '메인', value: 'main' }]

export type BannerPosition = (typeof BANNER_POSITION_OPTIONS)[number]['value']

export interface Banner {
  id: number
  title?: string
  imageUrl: string
  linkUrl?: string
  altText?: string
  position?: BannerPosition
  status: BannerStatus
  createdAt?: string
  updatedAt?: string
}
