import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
// React.memoを使うと親から子コンポーネントに渡している props が更新されない限り(後述する callback 関数とかは別)子コンポーネントは再レンダリングされない

type Props = {
  id: number;
  imageUrl: string;
  fullName: string;
  profession: string;
  onClick: (id: number) => void;
};
export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, fullName, profession, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRightRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px "
          src={imageUrl}
          alt={fullName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {profession}
        </Text>
        <Text fontSize="lg" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
