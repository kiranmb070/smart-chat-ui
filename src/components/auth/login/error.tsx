import { Subtext } from "../../../ui-libary/typography";



export const Error = ({ error }: { error: string }) => {

  if (!error) return null;
  return (
    <Subtext color="red">
      {error}
    </Subtext>
  );
}