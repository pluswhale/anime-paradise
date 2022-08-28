import {GetAnimePage} from "./__generated__/GetAnimePage";
import {apolloClient} from "../../graphql";
import {GET_ANIME_PAGE} from "./queries";

class AnimeService {
    async getAnimePage(page: Number, perPage:number
        = 5): Promise<GetAnimePage["Page"]> {
        try {
            const response =
                await apolloClient.query({query: GET_ANIME_PAGE, variables: { page, perPage } });
            if (!response || !response.data) {
                throw new Error("Cannot get anime list");
            }

            return response.data;
        } catch (e) {
            throw e;
        }
    }
}

export default new AnimeService();