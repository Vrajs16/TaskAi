import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export const QUERY = gql`
  query GoogleEvents ($start: String!, $end: String!, $code: String!) {
    getEvents(start: $start, end: $end, code: $code) {
      code
      events {
        summary
        description
        start
        end
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getEvents }) => {
  return (
    <>
      <TableContainer>
        <Table variant="striped">
          <TableCaption>Table of Appointments</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Start</Th>
              <Th>End</Th>
            </Tr>
          </Thead>
          <Tbody>
            {getEvents.events.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.summary}</Td>
                  <Td>{item.start}</Td>
                  <Td>{item.end}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
