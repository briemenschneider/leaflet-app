import { Marker, Popup } from "react-leaflet";
import { MyPoint } from "./points";
import L from "leaflet";

export interface MarkerPointsProps {
    points: MyPoint[];
}

export const MarkerPoints = (props: MarkerPointsProps) => {
    return (
        <>
            {props.points.map((point) => (
                <Marker key={point.name} position={[point.lat, point.lng]} icon={new L.Icon.Default({ iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${point.color}.png` })}>
                    <Popup>
                        <div>
                            <h2>{point.name}</h2>
                            <p>{point.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};