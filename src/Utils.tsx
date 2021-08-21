export class Utils {
    public static GetCharId(): string | null {
        const urlParams = new URLSearchParams(window.location.search);
        const charId = urlParams.has("c") ? urlParams.get("c") : "";
        if (!!charId && charId.length > 0) {
            return charId;
        }

        return null;
    }
}