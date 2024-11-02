import { useQuery } from "@tanstack/react-query";
import { getMetaFn } from "../api/fn/meta";


// export const useGetStaff = (api, id, type) =>
//   useQuery({
//     queryKey: [ "useGetStaff", "useGetStaffTimeSlotsByDate", id, type ],
//     queryFn: () => {
//       if (type === "service") {
//         return getStaffByServiceIdFn(api, id);
//       }
//       if (type === "serviceAddress") {
//         return getStaffByServiceAddressIdFn(api, id);
//       }
//
//       return getStaffFn(api);
//     },
//     retry: 1,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });


// export const usePostStaff = (api) =>
//   useMutation({
//     mutationFn: (data) => postStaffFn(api, data),
//     onSuccess: onQuerySuccess([ "useGetStaff" ]),
//   });