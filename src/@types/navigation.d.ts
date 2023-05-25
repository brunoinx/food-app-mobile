import { RootAppStackParamList } from '@/dtos/RootParamsListDTO';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootAppStackParamList {}
  }
}
