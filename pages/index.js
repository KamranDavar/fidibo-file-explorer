import { Row } from "../components/Row";
import { files } from "../server/index";

export default function Home() {
  console.log("files", files);
  return (
    <ul>
      {files.map((item) => (
        <Row key={item.id} data={item} />
      ))}
    </ul>
  );
}
