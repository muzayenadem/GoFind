import {
    Map,
    MapOverlay,
    MapContent,
    MapBody,
    } from "@chakra-ui/modal";
    import { useDisclosure } from "@chakra-ui/hooks";
    import CardHorizon from "../CardHorizon"
     
    const MapExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
     
    <Map/>
    ); };
    export default MapExample;