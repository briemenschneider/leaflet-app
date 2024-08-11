import { LeafletMap } from './LeafletMap';
import { MarkerPoints } from './MarkerPoints';
import { points } from './points';

function App() {
  return (
    <LeafletMap>
      <MarkerPoints points={points} />
    </LeafletMap>
  );
}

export default App;
