import { useProfile, UseProfileArgs } from "@lens-protocol/react-web";

export function Profile({ profileId, onSuccess }: { profileId: UseProfileArgs; onSuccess?: () => void }){
    useProfile(profileId)

}