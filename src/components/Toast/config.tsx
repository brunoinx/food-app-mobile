import { ToastConfig, ToastConfigParams } from 'react-native-toast-message';

import { CustomToastProps } from '@/hooks/useToast';

import { CustomToast } from '.';

export const toastConfig: ToastConfig = {
  success: ({ text1, text2, type }: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      title={text1}
      description={text2}
      type={type as 'success' | 'warning' | 'error'}
    />
  ),
  warning: ({ text1, text2, type }: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      title={text1}
      description={text2}
      type={type as 'success' | 'warning' | 'error'}
    />
  ),
  error: ({ text1, text2, type }: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      title={text1}
      description={text2}
      type={type as 'success' | 'warning' | 'error'}
    />
  ),
};
