import { createClient } from 'urql';
import { GRAPH } from '../constants';

const client = createClient({
  url: GRAPH.Graph_Api,
});

export { client };