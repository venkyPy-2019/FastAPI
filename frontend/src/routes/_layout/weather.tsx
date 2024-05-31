import {
    Box,
    Flex,
    Heading,
    // Skeleton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Select,
    Input,
    Button,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react"
  import { useState } from "react";
//   import { useSuspenseQuery } from "@tanstack/react-query"
  import { createFileRoute } from "@tanstack/react-router"
  
//   import { Suspense } from "react"
//   import { ErrorBoundary } from "react-error-boundary"
//   import { SoilService } from "../../client"
  
  export const Route = createFileRoute("/_layout/weather")({
    component: Weather,
  })

  
  function WeatherTable() {
    return (
      <TableContainer overflowX="auto">
        <Table size={{ base: "sm", md: "md" }}>
          <Thead>
            <Tr>
              <Th textAlign="center">weather_id</Th>
              <Th colSpan={2} textAlign="center">date</Th>
              <Th colSpan={2} textAlign="center">srad</Th>
              <Th colSpan={2} textAlign="center">wind</Th>
              <Th colSpan={2} textAlign="center">rh</Th>
              <Th colSpan={2} textAlign="center">rain</Th>
              <Th colSpan={2} textAlign="center">tmin</Th>
              <Th colSpan={2} textAlign="center">tmax</Th>
            </Tr>
            <Tr>
              <Th></Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>
              <Th textAlign="center">min</Th>
              <Th textAlign="center">max</Th>              
            </Tr>
          </Thead>
          <Tbody>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
<Td>Test</Td>
            </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
  function Weather() {        
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you can handle the upload logic using the selected file (selectedFile)
      console.log("Uploading file:", selectedFile);
    }
  };

  const handleClick = () => {
    // Programmatically trigger the file input's click event
    const fileInput = document.getElementById("uploadWeatherFileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
    return (
        <Box py={12} width="100%">
        <Heading size="lg" textAlign={{ base: "center", md: "left" }} pb={4}>
          Weather
        </Heading>        
        <Flex direction="column" pb={8} width="100%">
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
              <FormLabel htmlFor="stationSelect">Station</FormLabel>
              <Select 
              id="stationSelect" 
              placeholder='Select Station' 
              size='md'                             
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
              <FormLabel htmlFor="siteSelect">Site</FormLabel>
              <Select 
              id="siteSelect" 
              placeholder='Select Site' 
              size='md'
              isDisabled // Disable the site select
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
          </Flex>
        </Flex>
       
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="averageWindInput">Average Wind (Km/h)</FormLabel>
            <Input 
              id="averageWindInput" 
              type="text" 
              placeholder="Enter Average Wind (Km/h)"                             
              required              
            />
          </FormControl>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="averageRainRateInput">Average Rain Rate (cm/hr)</FormLabel>
            <Input 
              id="averageRainRateInput" 
              type="text" 
              placeholder="Average Rain Rate (cm/hr)"                             
              required              
            />
          </FormControl>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="averageCO2Input">Average CO2 (ppm)</FormLabel>
            <Input 
              id="averageCO2Input" 
              type="text" 
              placeholder="Average CO2 (ppm)"                             
              required              
            />
          </FormControl>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="nContentRainfallInput">N Content in Rainfall (Kg/ha)</FormLabel>
            <Input 
              id="nContentRainfallInput" 
              type="text" 
              placeholder="N Content in Rainfall (Kg/ha)"                             
              required              
            />
          </FormControl>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
        <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
          <FormLabel htmlFor="uploadWeatherFileInput">Upload Weather File (.csv format)</FormLabel>
          <input
            type="file"
            id="uploadWeatherFileInput"
            accept=".csv"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Button variant="primary" onClick={handleClick}>Choose File and Upload</Button>
        </FormControl>
      </Flex>
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="downloadWeatherDataInput">Download Weather Data (last 5 years)</FormLabel>
            <Button variant="primary" onClick={handleUpload}>Download</Button>
          </FormControl>
        </Flex>
        
        
        <Box>          
          <Box width="1400px">
            <WeatherTable />
          </Box>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} pt={8} justifyContent="center">
          <Button variant="primary" type="submit" mr={{ base: 0, md: 4 }}>
            Update
          </Button>
          <Button variant="danger" type="submit">
            Delete
          </Button>
        </Flex>
      </Box>
    )
  }
  