import { AppShell, Header } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderMenu } from '../components/HeaderMenu/ui/HeaderMenu';

export default function IndexLayout() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} px="md" withBorder={false}>
          <HeaderMenu />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
