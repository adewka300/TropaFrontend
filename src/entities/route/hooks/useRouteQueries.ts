// entities/route/hooks/useRouteQueries.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { routeApi } from "@/shared/api/route";
import type { EditRouteStatusRequest, CancelRouteRequest, RouteFeedbackRequest, AddFoodPointRequest } from "@/shared/api/route/types";

export const useRouteDetail = (routeId: string) => {
    return useQuery({
        queryKey: ["route", routeId],
        queryFn: () => routeApi.getDetail(routeId),
        enabled: !!routeId,
        select: (res) => res.data,
    });
};

export const useEditRouteStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditRouteStatusRequest) => routeApi.editStatus(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["route", variables.route_id] });
            queryClient.invalidateQueries({ queryKey: ["user", "routes"] });
        },
    });
};

export const useCancelRoute = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CancelRouteRequest) => routeApi.cancel(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["route", variables.route_id] });
            queryClient.invalidateQueries({ queryKey: ["user", "routes"] });
        },
    });
};

export const useRouteFeedback = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: RouteFeedbackRequest) => routeApi.feedback(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["route", variables.route_id] });
        },
    });
};

export const useAddFoodPoint = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddFoodPointRequest) => routeApi.addFoodPoint(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["route", variables.route_id] });
        },
    });
};

export const useFoodForm = () => {
    return useQuery({
        queryKey: ["route", "food-form"],
        queryFn: () => routeApi.getFoodForm(),
        select: (res) => res.data.interests,
        staleTime: 30 * 60 * 1000,
        retry: 1,
    });
};

export const useRouteVisibility = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { route_id: string; is_public: boolean }) =>
            routeApi.setVisibility(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["route", variables.route_id] });
        },
    });
};
