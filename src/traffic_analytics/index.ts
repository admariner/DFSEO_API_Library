import DFSEO from "..";
import { SimilarWeb } from "./similar_web";

export class TrafficAnalytics {
  public similarWeb: SimilarWeb = new SimilarWeb(this.DFSEO);
  constructor(private DFSEO: DFSEO) {}
}
