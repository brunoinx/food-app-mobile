import Toast, { ToastProps } from 'react-native-toast-message';

export interface CustomToastProps extends ToastProps {
  title: string;
  description: string;
  type?: 'success' | 'warning' | 'error';
  duration?: number;
}

export const useToast = () => {
  const showToast = ({
    title,
    description,
    type = 'success',
    duration = 3000,
    ...rest
  }: CustomToastProps) => {
    Toast.show({
      text1: title,
      text2: description,
      type: type,
      visibilityTime: duration,
      ...rest,
    });
  };

  const hideToast = () => {
    Toast.hide();
  };

  return { showToast, hideToast };
};
