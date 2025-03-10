import React, { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) {
    return null;
  }

  return (
    <Text as="p" color="tomato" className="pb-3">
      {children}
    </Text>
  );
};

export default ErrorMessage;
