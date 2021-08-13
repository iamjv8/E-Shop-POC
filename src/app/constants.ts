import { environment } from "src/environments/environment";

class MappingData {
    getMappingServices() {
        return environment.backendServer;
    }
}

export default MappingData;