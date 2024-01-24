import { IPromiseResponse } from "../../services/rest-api.interface";
import RestApi from "../../services/rest-api.service";
import { IApiCharactersResponse, IFiltersForCharacters } from "./rick-and-morty.interface";

export class RickAndMortyApi extends RestApi {
  constructor() {
    super("https://rickandmortyapi.com/api/");
  }

  getCharacters(page: number): IPromiseResponse<IApiCharactersResponse> {
    return this.get(`character/?page=${page}`);
  }

  getCharactersWithFilters(filters: IFiltersForCharacters): IPromiseResponse<IApiCharactersResponse> {
    console.log(filters);
    return this.get(`character/?page=1
    ${filters?.name ? `&name=${filters.name}` : ""}
    ${filters?.status ? `&status=${filters.status}` : ""}
    ${filters?.gender ? `&gender=${filters.gender}` : ""}
    `);
  }
}