import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = "https://cookie-stand-api-reference.herokuapp.com/api/v1/cookie-stands/";
import { useAuth } from '../contexts/auth';

export default function useResource() {

    const { tokens, logout } = useAuth();

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate();
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate();
        } catch (err) {
            handleError(err);
        }
    }

    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function handleError(err) {
        console.error(err);
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}
