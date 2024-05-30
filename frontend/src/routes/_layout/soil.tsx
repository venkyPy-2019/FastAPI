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
  import { useState } from "react"
//   import { useSuspenseQuery } from "@tanstack/react-query"
  import { createFileRoute } from "@tanstack/react-router"
  
//   import { Suspense } from "react"
//   import { ErrorBoundary } from "react-error-boundary"
//   import { SoilService } from "../../client"
  
  export const Route = createFileRoute("/_layout/soil")({
    component: Soil,
  })

  function SoilTableRow({ unitTypeOptions }: { unitTypeOptions: string[] }) {
    return (
      <Tr>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>
          <Select size="md" defaultValue="">
            {unitTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
        <Td>test</Td>
      </Tr>
    );
  }
  
  function SoilTableBody({ unitTypeOptions }: { unitTypeOptions: string[] }) {
    return (
      <Tbody>
        <SoilTableRow unitTypeOptions={unitTypeOptions} />
      </Tbody>
    );
  }
  
  function SoilTable() {
    const unitTypeOptions = ["m", "w"]; // Options for the unit type select field
  
    return (
      <TableContainer overflowX="auto">
        <Table size={{ base: "sm", md: "md" }}>
          <Thead>
            <Tr>
              <Th>Bottom depth (cm)</Th>
              <Th>OM (%)</Th>
              <Th>NO3 (ppm)</Th>
              <Th>NH4 (ppm)</Th>
              <Th>Unit Type</Th>
              <Th>Tmpr (C)</Th>
              <Th>Sand (%)</Th>
              <Th>Slit (%)</Th>
              <Th>Clay (%)</Th>
              <Th>BD (g/cm3)</Th>
              <Th>TH33 (cm3/cm3)</Th>
              <Th>TH1500 (cm3/cm3)</Th>
              <Th>thr</Th>
              <Th>ths</Th>
              <Th>tha</Th>
              <Th>th</Th>
              <Th>Alfa</Th>
              <Th>n</Th>
              <Th>Ks</Th>
              <Th>Kk</Th>
              <Th>thk</Th>
            </Tr>
          </Thead>
          <SoilTableBody unitTypeOptions={unitTypeOptions} />
        </Table>
      </TableContainer>
    );
  }
  
  function Soil() {
    const [selectedOption, setSelectedOption] = useState("");
    const [soilName, setSoilName] = useState("");    

    const handleSoilSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSoil = event.target.value;
        setSelectedOption(selectedSoil);
        setSoilName(selectedSoil); // Update soilName with the selected soil
      };

    return (
        <Box py={12} width="100%">
        <Heading size="lg" textAlign={{ base: "center", md: "left" }} pb={4}>
          Soil
        </Heading>        
        <Flex direction="column" pb={8} width="100%">
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
              <FormLabel htmlFor="soilSelect">Soil</FormLabel>
              <Select 
              id="soilSelect" 
              placeholder='Select Soil' 
              size='md' 
              onChange={handleSoilSelect}
              value={selectedOption}
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
          <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
              <FormLabel htmlFor="boundarySelect">Soil Boundary Condition</FormLabel>
              <Select id="boundarySelect" placeholder='Select Boundary Condition' size='md'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
          </Flex>
        </Flex>
       {selectedOption && selectedOption !== "" && (
        <Box>
          <FormLabel htmlFor="soilNameInput">Soil Properties</FormLabel>
          <Box width="1400px">
            <SoilTable />
          </Box>
        </Box>
      )}
        <Flex direction={{ base: "column", md: "row" }} pb={8} width="100%">
          <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel htmlFor="soilNameInput">Soil Name</FormLabel>
            <Input 
              id="soilNameInput" 
              type="text" 
              placeholder="Enter Soil Name" 
              value={soilName} 
              onChange={(e) => setSoilName(e.target.value)} // Allow manual input as well
              required
              isDisabled
            />
          </FormControl>
        </Flex>
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
  