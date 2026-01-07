'use client';

import { FormHeader } from '@/components/form-header';
import FormInput from '@/components/form-input';
import FormSelect from '@/components/form-select';
import { ModalAction, ModalContent } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';
import {
  BANNER_POSITION_OPTIONS,
  BANNER_STATUS_OPTIONS,
  type Banner,
} from '@/models/banner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';

/**
 * 배너 폼 스키마
 */
const BannerSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  linkUrl: z.string().optional(),
  altText: z.string().optional(),
  position: z.enum(
    BANNER_POSITION_OPTIONS.map((opt) => opt.value),
    {
      error: '배너 위치를 선택해주세요',
    }
  ),
  status: z.enum(
    BANNER_STATUS_OPTIONS.map((opt) => opt.value),
    {
      error: '배너 상태를 선택해주세요',
    }
  ),
});

type BannerFormData = z.infer<typeof BannerSchema>;

type BannerProps = {
  initialData?: Banner;
  onClose?: (param: Banner | null) => void;
};

export function BannerModal({ initialData, onClose }: Readonly<BannerProps>) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BannerFormData>({
    defaultValues: initialData ?? {
      title: '',
      imageUrl: '',
      linkUrl: '',
      altText: '',
      position: 'main',
      status: 'active',
    },
    resolver: zodResolver(BannerSchema),
  });

  const imageUrl = useWatch({ control, name: 'imageUrl' });

  /**
   * 이미지 업로드 완료 시 imageUrl에 tempId를 설정하는 핸들러
   */
  const handleImageChange = (tempId: string | undefined) => {
    setValue('imageUrl', tempId ?? '');
  };

  const onSubmit = (data: BannerFormData) => {
    onClose?.({
      ...data,
      id: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <ModalContent>
        {/* 첫 번째 줄: 제목 */}
        <div className='space-y-2'>
          <FormHeader title='제목' required />
          <FormInput control={control} name='title' placeholder='게시글 제목' />
          {errors.title && <p className='error-msg'>{errors.title.message}</p>}
        </div>

        {/* 두 번째 줄: 포지션, 상태 */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <FormHeader title='포지션' required />
            <FormSelect
              control={control}
              name='position'
              placeholder='포지션 선택'
            >
              {BANNER_POSITION_OPTIONS.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </FormSelect>
            {errors.position && (
              <p className='error-msg'>{errors.position.message}</p>
            )}
          </div>
          <div className='space-y-2'>
            <FormHeader title='상태' required />
            <FormSelect control={control} name='status' placeholder='상태'>
              {BANNER_STATUS_OPTIONS.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </FormSelect>
            {errors.status && (
              <p className='error-msg'>{errors.status.message}</p>
            )}
          </div>
        </div>

        {/* 세 번째 줄: 제목 */}
        <div className='space-y-2'>
          <FormHeader title='대체 텍스트' required />
          <FormInput
            control={control}
            name='altText'
            placeholder='대체 텍스트'
          />
          {errors.altText && (
            <p className='error-msg'>{errors.altText.message}</p>
          )}
        </div>

        {/* 네 번째 줄: 제목 */}
        <div className='space-y-2'>
          <FormHeader title='링크URL' required />
          <FormInput control={control} name='linkUrl' placeholder='링크 URL' />
          {errors.linkUrl && (
            <p className='error-msg'>{errors.linkUrl.message}</p>
          )}
        </div>
      </ModalContent>
      <ModalAction>
        {/* 버튼 */}
        <Button type='submit' className='flex-1' disabled={isSubmitting}>
          {isSubmitting ? '저장 중...' : '저장'}
        </Button>
        <Button
          type='button'
          variant='outline'
          className='flex-1'
          onClick={() => onClose?.(null)}
        >
          취소
        </Button>
      </ModalAction>
    </form>
  );
}
