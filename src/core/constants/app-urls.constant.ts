export class AppUrls {    

    private static API_ID = "/:id";
    private static API_LIST = "/list";
    private static API_SAVE = "/save";
    private static API_UPDATE = "/update/:id";


    public static API_PEOPLE = "people";
    public static API_PEOPLE_SINGLE = `${AppUrls.API_ID}`;
    public static API_PEOPLE_LIST = `${AppUrls.API_LIST}`;
    public static API_PEOPLE_SAVE = `${AppUrls.API_SAVE}`;
    public static API_PEOPLE_UPDATE = `${AppUrls.API_UPDATE}`;

    public static API_FILMS = "films"
    // public static API_FILMS_SINGLE = `${AppUrls.API_FILMS}${AppUrls.API_ID}`;
    // public static API_FILMS_LIST = `${AppUrls.API_FILMS}${AppUrls.API_LIST}`;
    // public static API_FILMS_SAVE = `${AppUrls.API_FILMS}${AppUrls.API_SAVE}`;
    // public static API_FILMS_UPDATE = `${AppUrls.API_FILMS}${AppUrls.API_UPDATE}`;
}