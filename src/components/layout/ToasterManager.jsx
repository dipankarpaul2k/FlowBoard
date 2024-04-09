import { Snackbar } from "@mui/material";
import useFbStore from "../../stores/useStore";

export default function ToasterManager() {
  const { toasterMsg, setToastMsg } = useFbStore();
  return (
    <>
      <Snackbar
        message={toasterMsg}
        open={!!toasterMsg}
        autoHideDuration={5000}
        onClose={() => setToastMsg("")}
      />
    </>
  );
}
