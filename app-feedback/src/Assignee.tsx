import { DocumentHandle, useEditDocument, useUsers } from "@sanity/sdk-react";
import { Flex, Inline, Avatar, Stack, Text, Button } from "@sanity/ui";

type AssigneeProps = {
  value: string;
  handle: DocumentHandle;
};

export function Assignee({ value, handle }: AssigneeProps) {
  const { data: users } = useUsers();
  const editAssignee = useEditDocument({ ...handle, path: "assignee" });

  return (
    <Stack space={3}>
      <Text weight="medium">Assignee</Text>
      <Inline space={1}>
        {users?.map((user) => (
          <Button
            key={user.sanityUserId}
            onClick={() => editAssignee(user.sanityUserId)}
            padding={0}
            mode="bleed"
          >
            <Flex
              direction="column"
              justify={"center"}
              align={"center"}
              gap={3}
            >
              <Avatar
                status={value === user.sanityUserId ? "online" : "inactive"}
                size={2}
                src={user.profile?.imageUrl}
              />
              {/* <Text weight="regular" size={1}>
                {user.profile?.displayName}
              </Text> */}
            </Flex>
          </Button>
        ))}
      </Inline>
    </Stack>
  );
}
