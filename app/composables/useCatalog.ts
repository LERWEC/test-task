import type { ICatalogItem } from "~/type/catalog";
import type { IApiProducts } from "~/type/api";

export const useCatalog = async () => {
  const page = ref(1);
  const productsItems = ref<ICatalogItem[]>([]);
  const total = ref(0);

  const { data, error, pending, refresh } = await useFetch<IApiProducts<ICatalogItem>>('/products', {
    baseURL: useRuntimeConfig().public.apiBase,
    query: { page },
    key: () => `products-page-${page.value}`,
    immediate: true,
  });

  const items = computed(() => productsItems.value ?? []);
  const isLoadingMore = computed(() => total.value > page.value);

  watch(
    () => data.value?.products,
    (newData) => {
      if (!newData) return;
      productsItems.value = [...productsItems.value, ...newData];
      if (data.value?.totalPages) total.value = data.value.totalPages;
    },
    { immediate: true }
  );

  const loadMore = () => {
    if(isLoadingMore.value) {
      page.value++;
      refresh();
    }
  };

  return {
    // Data
    items,
    isLoadingMore,

    // State
    pending,
    error: computed(() => error.value ? 'Произошла ошибка, попробуйте позже' : ''),

    // Actions - Read
    loadMore,
  };
};
