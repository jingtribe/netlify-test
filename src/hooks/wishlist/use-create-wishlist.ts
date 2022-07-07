import { useCallback } from 'react'

import type { ItemBody } from '@bigcommerce/storefront-data-hooks/api/wishlist'
import { CommerceError } from '@bigcommerce/storefront-data-hooks/commerce/utils/errors'
import { HookFetcher } from '@bigcommerce/storefront-data-hooks/commerce/utils/types'
import useAction from '@bigcommerce/storefront-data-hooks/commerce/utils/use-action'
import useCustomer from '@bigcommerce/storefront-data-hooks/use-customer'
import { Wishlist } from '@bigcommerce/storefront-data-hooks/wishlist/use-wishlist'
import { useTranslation } from 'react-i18next'

import { useWishlists } from './use-wishlists'

const defaultOpts = {
  url: '/api/bigcommerce/wishlist',
  method: 'POST',
}

type CreateWishlistInput = {
  name: string
  isPublic: boolean
  item?: ItemBody
}

const fetcher: HookFetcher<Wishlist, CreateWishlistInput> = (
  options,
  { isPublic, name, item },
  fetch
) => {
  // TODO: add validations before doing the fetch
  // Use a dummy base as we only care about the relative path
  const url = new URL(options?.url ?? defaultOpts.url, 'http://a')
  return fetch({
    ...defaultOpts,
    ...options,
    url: (options?.base || '') + url.pathname + url.search,
    body: { isPublic, name, item },
  })
}

export const useCreateWishlist = (): ((
  input: CreateWishlistInput
) => Promise<Wishlist>) => {
  const { data: customer } = useCustomer()
  const { revalidate } = useWishlists()
  const fn = useAction(defaultOpts, fetcher)
  const { t } = useTranslation()

  return useCallback(
    async function addItem(input: CreateWishlistInput) {
      if (!customer) {
        // A signed customer is required in order to have a wishlist
        throw new CommerceError({
          message: t('errors.customer_not_found', 'Signed customer not found'),
        })
      }

      const data = await fn(input)
      await revalidate()
      return data
    },
    [fn, revalidate, customer, t]
  )
}
