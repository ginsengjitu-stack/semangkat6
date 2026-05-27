import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AdminTransactionList, AdminUserList, AuthResponse, DepositRequest, ErrorResponse, GetTransactionsParams, HealthStatus, LoginRequest, RegisterRequest, SuccessResponse, Transaction, TransactionList, UpdateBalanceRequest, UpdateStatusRequest, UpdateTransactionStatusRequest, User, UserProfile, WithdrawRequest } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register a new user
 */
export declare const getRegisterUrl: () => string;
export declare const register: (registerRequest: RegisterRequest, options?: RequestInit) => Promise<AuthResponse>;
export declare const getRegisterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterRequest>;
}, TContext>;
export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type RegisterMutationBody = BodyType<RegisterRequest>;
export type RegisterMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Register a new user
 */
export declare const useRegister: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterRequest>;
}, TContext>;
/**
 * @summary Login
 */
export declare const getLoginUrl: () => string;
export declare const login: (loginRequest: LoginRequest, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginRequest>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Login
 */
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
/**
 * @summary Logout
 */
export declare const getLogoutUrl: () => string;
export declare const logout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
 * @summary Logout
 */
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user profile
 */
export declare const getGetUserProfileUrl: () => string;
export declare const getUserProfile: (options?: RequestInit) => Promise<UserProfile>;
export declare const getGetUserProfileQueryKey: () => readonly ["/api/user/profile"];
export declare const getGetUserProfileQueryOptions: <TData = Awaited<ReturnType<typeof getUserProfile>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUserProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUserProfile>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getUserProfile>>>;
export type GetUserProfileQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get user profile
 */
export declare function useGetUserProfile<TData = Awaited<ReturnType<typeof getUserProfile>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUserProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user transactions
 */
export declare const getGetTransactionsUrl: (params?: GetTransactionsParams) => string;
export declare const getTransactions: (params?: GetTransactionsParams, options?: RequestInit) => Promise<TransactionList>;
export declare const getGetTransactionsQueryKey: (params?: GetTransactionsParams) => readonly ["/api/transactions", ...GetTransactionsParams[]];
export declare const getGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<ErrorResponse>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactions>>>;
export type GetTransactionsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get user transactions
 */
export declare function useGetTransactions<TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<ErrorResponse>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a deposit request
 */
export declare const getCreateDepositUrl: () => string;
export declare const createDeposit: (depositRequest: DepositRequest, options?: RequestInit) => Promise<Transaction>;
export declare const getCreateDepositMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
export type CreateDepositMutationResult = NonNullable<Awaited<ReturnType<typeof createDeposit>>>;
export type CreateDepositMutationBody = BodyType<DepositRequest>;
export type CreateDepositMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a deposit request
 */
export declare const useCreateDeposit: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createDeposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
/**
 * @summary Create a withdraw request
 */
export declare const getCreateWithdrawUrl: () => string;
export declare const createWithdraw: (withdrawRequest: WithdrawRequest, options?: RequestInit) => Promise<Transaction>;
export declare const getCreateWithdrawMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createWithdraw>>, TError, {
        data: BodyType<WithdrawRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createWithdraw>>, TError, {
    data: BodyType<WithdrawRequest>;
}, TContext>;
export type CreateWithdrawMutationResult = NonNullable<Awaited<ReturnType<typeof createWithdraw>>>;
export type CreateWithdrawMutationBody = BodyType<WithdrawRequest>;
export type CreateWithdrawMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a withdraw request
 */
export declare const useCreateWithdraw: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createWithdraw>>, TError, {
        data: BodyType<WithdrawRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createWithdraw>>, TError, {
    data: BodyType<WithdrawRequest>;
}, TContext>;
/**
 * @summary Admin - Get all users
 */
export declare const getAdminGetUsersUrl: () => string;
export declare const adminGetUsers: (options?: RequestInit) => Promise<AdminUserList>;
export declare const getAdminGetUsersQueryKey: () => readonly ["/api/admin/users"];
export declare const getAdminGetUsersQueryOptions: <TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminGetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetUsers>>>;
export type AdminGetUsersQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Admin - Get all users
 */
export declare function useAdminGetUsers<TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin - Update user balance
 */
export declare const getAdminUpdateUserBalanceUrl: (id: number) => string;
export declare const adminUpdateUserBalance: (id: number, updateBalanceRequest: UpdateBalanceRequest, options?: RequestInit) => Promise<User>;
export declare const getAdminUpdateUserBalanceMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserBalance>>, TError, {
        id: number;
        data: BodyType<UpdateBalanceRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserBalance>>, TError, {
    id: number;
    data: BodyType<UpdateBalanceRequest>;
}, TContext>;
export type AdminUpdateUserBalanceMutationResult = NonNullable<Awaited<ReturnType<typeof adminUpdateUserBalance>>>;
export type AdminUpdateUserBalanceMutationBody = BodyType<UpdateBalanceRequest>;
export type AdminUpdateUserBalanceMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin - Update user balance
 */
export declare const useAdminUpdateUserBalance: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserBalance>>, TError, {
        id: number;
        data: BodyType<UpdateBalanceRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminUpdateUserBalance>>, TError, {
    id: number;
    data: BodyType<UpdateBalanceRequest>;
}, TContext>;
/**
 * @summary Admin - Update user status (active/suspended)
 */
export declare const getAdminUpdateUserStatusUrl: (id: number) => string;
export declare const adminUpdateUserStatus: (id: number, updateStatusRequest: UpdateStatusRequest, options?: RequestInit) => Promise<User>;
export declare const getAdminUpdateUserStatusMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserStatus>>, TError, {
        id: number;
        data: BodyType<UpdateStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserStatus>>, TError, {
    id: number;
    data: BodyType<UpdateStatusRequest>;
}, TContext>;
export type AdminUpdateUserStatusMutationResult = NonNullable<Awaited<ReturnType<typeof adminUpdateUserStatus>>>;
export type AdminUpdateUserStatusMutationBody = BodyType<UpdateStatusRequest>;
export type AdminUpdateUserStatusMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin - Update user status (active/suspended)
 */
export declare const useAdminUpdateUserStatus: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateUserStatus>>, TError, {
        id: number;
        data: BodyType<UpdateStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminUpdateUserStatus>>, TError, {
    id: number;
    data: BodyType<UpdateStatusRequest>;
}, TContext>;
/**
 * @summary Admin - Get all transactions
 */
export declare const getAdminGetTransactionsUrl: () => string;
export declare const adminGetTransactions: (options?: RequestInit) => Promise<AdminTransactionList>;
export declare const getAdminGetTransactionsQueryKey: () => readonly ["/api/admin/transactions"];
export declare const getAdminGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof adminGetTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminGetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetTransactions>>>;
export type AdminGetTransactionsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Admin - Get all transactions
 */
export declare function useAdminGetTransactions<TData = Awaited<ReturnType<typeof adminGetTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin - Update transaction status
 */
export declare const getAdminUpdateTransactionStatusUrl: (id: number) => string;
export declare const adminUpdateTransactionStatus: (id: number, updateTransactionStatusRequest: UpdateTransactionStatusRequest, options?: RequestInit) => Promise<Transaction>;
export declare const getAdminUpdateTransactionStatusMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateTransactionStatus>>, TError, {
        id: number;
        data: BodyType<UpdateTransactionStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminUpdateTransactionStatus>>, TError, {
    id: number;
    data: BodyType<UpdateTransactionStatusRequest>;
}, TContext>;
export type AdminUpdateTransactionStatusMutationResult = NonNullable<Awaited<ReturnType<typeof adminUpdateTransactionStatus>>>;
export type AdminUpdateTransactionStatusMutationBody = BodyType<UpdateTransactionStatusRequest>;
export type AdminUpdateTransactionStatusMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin - Update transaction status
 */
export declare const useAdminUpdateTransactionStatus: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdateTransactionStatus>>, TError, {
        id: number;
        data: BodyType<UpdateTransactionStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminUpdateTransactionStatus>>, TError, {
    id: number;
    data: BodyType<UpdateTransactionStatusRequest>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map