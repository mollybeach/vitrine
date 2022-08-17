interface CreateVenuesProps {
  venuesData: Array<any>;
}

export default function CreateVenues(props: CreateVenuesProps) {
  const { venuesData } = props;
  const { id }: any = useParams();
  const data = id ? venuesData[{ id }.id] || {} : {};
  console.log(data);