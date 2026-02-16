import type { ICatalogItem } from "~/type/catalog";
import type { IApiProducts } from "~/type/api";

import { useApi } from "./useApi";

export const useCatalog = () => {
  const api = useApi()

  const page = ref(1);

  const {
    data,
    status,
    error,
  } = useLazyAsyncData(
    'channels',
    async () => {
      const response = await api.get<IApiProducts<ICatalogItem>>('/products', {
        query: {
          page: page.value
        },
      });
      return response;
    },
    {
      immediate: true,
      default: () => null,
      watch: [page],
    },
  );

  const productsItems = ref<ICatalogItem[]>([]);
  const total = ref(0);

  const items = computed(() => productsItems.value ?? []);
  const loading = computed(() => status.value === 'pending');
  const isLoadingMore = computed(() => total.value > page.value);

  watch(
    () => data.value?.products,
    (newData) => {
      if (!newData) return;

      productsItems.value = [
        ...productsItems.value,
        ...newData,
      ];      

      if(data.value?.totalPages) total.value =  data.value?.totalPages
    },
    { immediate: true },
  );


  // Загрузить больше
  const loadMore = () => {
    if(isLoadingMore.value) page.value++
  };

  return {
    // Data
    items,
    isLoadingMore,

    // State
    loading,
    error: computed(() => error.value ? 'Произошла ошибка, попробуйте позже' : ''),
    status,

    // Actions - Read
    loadMore,
  };
};
