"use client";
import { useQuery } from "@tanstack/react-query";
import { ProfileForm } from "./_ui/profile-form";
import { Spinner } from "@/shared/ui/spinner";
//import { getProfileQuery } from "@/entities/profile/queries";
import { useRouter } from "next/navigation";

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {
  return (
    <ProfileForm
      //profile={profile}
      //onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
